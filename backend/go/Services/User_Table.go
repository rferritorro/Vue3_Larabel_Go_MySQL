package Services

import (
	"go-restaurant/Config"
	"go-restaurant/Models"
)

func GetAllReserved(reserve *[]Models.Reserved) (err error) {
	if err = Config.DB.Find(reserve).Error; err != nil {
		return err
	}
	return nil
}

//CreateUser ... Insert New data
func CreateReserved(reserved *Models.User) (err error) {
	if err = Config.DB.Create(reserved).Error; err != nil {
		return err
	}
	return nil
}

//GetUserByID ... Fetch only one user by Id
func GetReservedByID(reserved *Models.Reserved, id string) (err error) {
	if err = Config.DB.Where("id = ?", id).First(reserved).Error; err != nil {
		return err
	}
	return nil
}

// //UpdateUser ... Update user
// func UpdateUser(user *Models.User, id string) (err error) {
// 	Config.DB.Save(user)
// 	return nil
// }

// //DeleteUser ... Delete user
// func DeleteUser(user *Models.User, id string) (err error) {
// 	Config.DB.Where("id = ?", id).Delete(user)
// 	return nil
// }
