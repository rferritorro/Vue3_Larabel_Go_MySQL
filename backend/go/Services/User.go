package Services

import (
	"go-restaurant/Config"
	"go-restaurant/Models"
	"errors"
	// "fmt"
	"log"
	"golang.org/x/crypto/bcrypt"
)

//GetAllUsers Fetch all user data
func GetAllUsers(users *[]Models.User) (err error) {
	if err = Config.DB.Find(users).Error; err != nil {
		return err
	}
	return nil
}

//CreateUser ... Insert New data
func CheckUser(user *Models.User) (id uint, err error) {
    var userBBDD Models.User
    Config.DB.Where("username = ?", user.Username).Find(&userBBDD)
    // Comparar contraseñas
    err = bcrypt.CompareHashAndPassword([]byte(userBBDD.Password), []byte(user.Password))
	
    if err != nil {
        log.Println("Error al comparar contraseñas: ", err)
        return 0, err
    }
    return userBBDD.Id, nil
}

func UpdatePassword(id uint, password string) (check bool,err error) {
	var userBBDD Models.User
    Config.DB.Where("id = ?", id).Find(&userBBDD)
	err = bcrypt.CompareHashAndPassword([]byte(userBBDD.Password), []byte(password))
	if err == nil {
		log.Println("Las contraseñas son iguales", err)
		return false,nil
	}
	bytePassword := []byte(password)
	// Make sure the second param `bcrypt generator cost` between [4, 32)
	PasswordHash, _ := bcrypt.GenerateFromPassword(bytePassword, bcrypt.DefaultCost)
	Config.DB.Model(&Models.User{}).Where("id = ?", id).Update("password",string(PasswordHash))
	return true,nil
}
func SetPassword(user *Models.User, password string) error {
	if len(password) == 0 {
		return errors.New("Password should not be empty!")
	}
	bytePassword := []byte(password)
	// Make sure the second param `bcrypt generator cost` between [4, 32)
	PasswordHash, _ := bcrypt.GenerateFromPassword(bytePassword, bcrypt.DefaultCost)
	user.Password = string(PasswordHash)
	return nil
}

func FindOneUser(user *Models.User, username string) error {
	count := 0
	err := Config.DB.Model(&Models.User{}).Where("username = ?", username).Count(&count).Error
	if err != nil {
		return err
	}
	if count == 1 {
		return errors.New("User already exist")
	}
	return nil
}

func CreateUser(user *Models.User) (err error) {
	err = SetPassword(user, user.Password)
	if err == nil {
		err = FindOneUser(user, user.Username)
		if err == nil {
			if err = Config.DB.Create(user).Error; err != nil {
				return err
			}
		} else {
			return err
		}
	} else {
		return err
	}
	return nil
}




//GetUserByID ... Fetch only one user by Id
func GetUserByID(user *Models.User, id string) (err error) {
	if err = Config.DB.Where("id = ?", id).First(user).Error; err != nil {
		return err
	}
	return nil
}

//UpdateUser ... Update user
func UpdateUser(user *Models.User, id string) (err error) {
	Config.DB.Save(user)
	return nil
}

//DeleteUser ... Delete user
func DeleteUser(user *Models.User, id string) (err error) {
	Config.DB.Where("id = ?", id).Delete(user)
	return nil
}

