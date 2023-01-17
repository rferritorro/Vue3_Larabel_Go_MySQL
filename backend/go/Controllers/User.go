package Controllers

import (
	"go-restaurant/Models"
	"go-restaurant/Services"
	"go-restaurant/common"
	"net/http"

	"fmt"
	"github.com/gin-gonic/gin"
)

//GetUsers ... Get all users
func GetUsers(c *gin.Context) {
	var users []Models.User
	err := Services.GetAllUsers(&users)
	if err != nil {
		//fmt.Println("Error")
		//c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, users)
	}
}

//CreateUser ... Create User
func CreateUser(c *gin.Context) {
	var user Models.User
	c.BindJSON(&user)
	err := Services.CreateUser(&user)
	fmt.Println(err)
	if err != nil {
		//fmt.Println(err.Error())
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, common.GenToken(user.Id,user.Username,user.Type_))
	}
}

func UpdatePassword(c *gin.Context) {
	var user Models.User
	c.BindJSON(&user)
	// fmt.Println(&+user)
	check,err := Services.UpdatePassword(user.Id,user.Password)
	if err != nil {
		//fmt.Println(err.Error())
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, check)
	}
}

func LoginUser(c *gin.Context) {
	var user Models.User
	c.BindJSON(&user)
	id, err := Services.CheckUser(&user)
	fmt.Println(&user)
	if err != nil {
		//fmt.Println(err.Error())
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, common.GenToken(id,user.Username,user.Type_))
	}
}

//GetUserByID ... Get the user by id
func GetUserByID(c *gin.Context) {
	id := c.Params.ByName("id")
	var user Models.User
	err := Services.GetUserByID(&user, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, user)
	}
}

//UpdateUser ... Update the user information
func UpdateUser(c *gin.Context) {
	var user Models.User
	id := c.Params.ByName("id")
	err := Services.GetUserByID(&user, id)
	if err != nil {
		c.JSON(http.StatusNotFound, user)
	}
	c.BindJSON(&user)
	err = Services.UpdateUser(&user, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, user)
	}
}

//DeleteUser ... Delete the user
func DeleteUser(c *gin.Context) {
	var user Models.User
	id := c.Params.ByName("id")
	err := Services.DeleteUser(&user, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, gin.H{"id" + id: "is deleted"})
	}
}
