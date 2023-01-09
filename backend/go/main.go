package main

import (
	"go-restaurant/Config"
	"go-restaurant/Routes"
	//"fmt"
	//"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	//"github.com/gin-contrib/cors"
	_ "github.com/go-sql-driver/mysql"
	//"time"
)

var err error

func main() {
	Config.DB, err = gorm.Open("mysql",Config.DbURL(Config.BuildDBConfig()))
	r := Routes.AddRouter()
	r.Run(":3000")
}
