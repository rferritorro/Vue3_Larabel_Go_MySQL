package common

import (
	"github.com/dgrijalva/jwt-go"
	"time"
	"os"
)


func GenToken(id uint, username string ) string {
	jwt_token := jwt.New(jwt.GetSigningMethod("HS256"))
	// Set some claims
	jwt_token.Claims = jwt.MapClaims{
		"id":  id,
		"username":  username,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	}

	// Sign and get the complete encoded token as a string
	token, _ := jwt_token.SignedString([]byte(os.Getenv("SECRET")))
	return token
}
