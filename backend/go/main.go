package main

import (
	"first-api/Config"
	"first-api/Models"
	"first-api/Routes"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"http"
	//"github.com/gin-contrib/cors"
	//"time"
)

var err error
func CORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		// Set headers
		w.Header().Set("Access-Control-Allow-Headers:", "*")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "*")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		fmt.Println("ok")

		// Next
		next.ServeHTTP(w, r)
		return
	})
}

func main() {
	Config.DB, err = gorm.Open("mysql", Config.DbURL(Config.BuildDBConfig()))

	//a := gin.Default()
	//MakeRoutes(a)

	fmt.Println(CORS)

	if err != nil {
		fmt.Println("Status:", err)
	}

	defer Config.DB.Close()
	Config.DB.AutoMigrate(&Models.User{})

	
	r := Routes.AddRouter()
	//running
	r.Run(":3000")
}


// func MakeRoutes(r *gin.Engine) {
// 	cors := func(c *gin.Context) {
// 		c.Writer.Header().Set("Content-Type", "application/json")
// 		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
// 		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
// 		c.Writer.Header().Set("Access-Control-Allow-Headers", "*")
// 		c.Writer.Header().Set("Access-Control-Allow-Methods", "*")		

// 		if c.Request.Method == "OPTIONS" {
// 			c.AbortWithStatus(200)
// 		}		
// 		fmt.Println("CORS")
// 		//c.Next()
// 	}
// 	//r.Use(cors)
// 	fmt.Println(r.Use(cors))
// }

