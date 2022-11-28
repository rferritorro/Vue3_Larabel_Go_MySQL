package main

import (
	"first-api/Config"
	//"first-api/Models"
	"first-api/Routes"
	//"fmt"
	//"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	//"github.com/gin-contrib/cors"
	//"time"
)

var err error

func main() {
	Config.DB, err = gorm.Open("mysql", Config.DbURL(Config.BuildDBConfig()))
	r := Routes.AddRouter()
	r.Run(":3000")
}
