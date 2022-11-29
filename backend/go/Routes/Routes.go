package Routes

import (
	"first-api/Controllers"
	"github.com/gin-gonic/gin"
	"net/http"
)

func CORS(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Methods", "*")
	c.Header("Access-Control-Allow-Headers", "*")
	c.Header("Content-Type", "application/json")
	if c.Request.Method != "OPTIONS" {
		c.Next()
	} else {
		c.AbortWithStatus(http.StatusOK)
	}
}

func AddRouter() *gin.Engine {
	r := gin.Default()
	r.Use(CORS)
	grp1 := r.Group("/user-api")
	{
		grp1.GET("user", Controllers.GetUsers)
		grp1.GET("user/:id", Controllers.GetUserByID)
		grp1.POST("user", Controllers.CreateUser)
		grp1.PUT("user/:id", Controllers.UpdateUser)
		grp1.DELETE("user/:id", Controllers.DeleteUser)
	}
	return r
}