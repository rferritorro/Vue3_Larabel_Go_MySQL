package Controllers

import (
	"go-restaurant/Models"
	"go-restaurant/Services"
	"net/http"

	//"fmt"
	"github.com/gin-gonic/gin"
)

func GetMenus(c *gin.Context) {
	var menus []Models.Menu
	err := Services.GetAllMenus(&menus)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, menus)
	}
}

//GetUserByID ... Get the user by id
func GetMenuByID(c *gin.Context) {
	id := c.Params.ByName("id")
	var menu Models.Menu
	err := Services.GetMenuByID(&menu, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, menu)
	}
}
