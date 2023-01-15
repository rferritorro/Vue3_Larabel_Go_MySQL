package common

import (
	"github.com/dgrijalva/jwt-go"
	"time"
	"os"
)


func GenToken(id uint, username string, is_admin bool ) string {
	jwt_token := jwt.New(jwt.GetSigningMethod("HS256"))
	// Set some claims
	jwt_token.Claims = jwt.MapClaims{
		"id":  id,
		"username":  username,
		"type_": is_admin,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	}

	// Sign and get the complete encoded token as a string
	token, _ := jwt_token.SignedString([]byte(os.Getenv("SECRET")))
	return token
}
