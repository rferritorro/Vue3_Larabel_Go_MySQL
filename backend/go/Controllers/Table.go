package Controllers

import (
	"go-restaurant/Models"
	"go-restaurant/Services"
	"net/http"

	//"fmt"
	"github.com/gin-gonic/gin"
)

func GetTables(c *gin.Context) {
	var tables_ []Models.Table_
	err := Services.GetAllTables(&tables_)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, tables_)
	}
}

//GetUserByID ... Get the user by id
func GetTableByID(c *gin.Context) {
	id := c.Params.ByName("id")
	var table_ Models.Table_
	err := Services.GetTableByID(&table_, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, table_)
	}
}

// func UpdateUser(c *gin.Context) {
// 	var user Models.User
// 	id := c.Params.ByName("id")
// 	err := Services.GetUserByID(&user, id)
// 	if err != nil {
// 		c.JSON(http.StatusNotFound, user)
// 	}
// 	c.BindJSON(&user)
// 	err = Services.UpdateUser(&user, id)
// 	if err != nil {
// 		c.AbortWithStatus(http.StatusNotFound)
// 	} else {
// 		c.JSON(http.StatusOK, user)
// 	}
// }

// func DeleteUser(c *gin.Context) {
// 	var user Models.User
// 	id := c.Params.ByName("id")
// 	err := Services.DeleteUser(&user, id)
// 	if err != nil {
// 		c.AbortWithStatus(http.StatusNotFound)
// 	} else {
// 		c.JSON(http.StatusOK, gin.H{"id" + id: "is deleted"})
// 	}
// }
