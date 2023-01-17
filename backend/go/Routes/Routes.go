package Routes

import (
	"go-restaurant/Controllers"
	"net/http"

	"github.com/gin-gonic/gin"
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
		grp1.POST("profile", Controllers.UpdatePassword)
		grp1.POST("users_login", Controllers.LoginUser)
		// grp1.PUT("user/:id", Controllers.UpdateUser)
		// grp1.DELETE("user/:id", Controllers.DeleteUser)
	}
	grp2 := r.Group("/table-api")
	{
		grp2.GET("table", Controllers.GetTables)
		grp2.GET("table/:id", Controllers.GetTableByID)
	}
	grp3 := r.Group("/menu-api")
	{
		grp3.GET("menu", Controllers.GetMenus)
		grp3.GET("menu/:id", Controllers.GetMenuByID)
	}
	grp4 := r.Group("/reserved-api")
	{
		grp4.GET("reserved", Controllers.GetReserved)
		grp4.GET("reserved/:id", Controllers.GetReservedByID)
		grp4.GET("user_reserved/:id", Controllers.GetAllUserReservedByID)
		grp4.POST("reserved", Controllers.CreateReserved)
	}
	return r	
}
