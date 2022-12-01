package Controllers

import (
	"go-restaurant/Models"
	"go-restaurant/Services"
	"net/http"

	//"fmt"
	"github.com/gin-gonic/gin"
)

func GetReserved(c *gin.Context) {
	var reserve []Models.Reserved
	err := Services.GetAllReserved(&reserve)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, reserve)
	}
}

func GetReservedByID(c *gin.Context) {
	id := c.Params.ByName("id")
	var reserved Models.Reserved
	err := Services.GetReservedByID(&reserved, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, reserved)
	}
}
