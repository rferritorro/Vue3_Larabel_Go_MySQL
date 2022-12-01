package Models

type User struct {
	Id       uint   `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
	Avatar   string `json:"avatar"`
	Type_    bool   `json:"type_"`
}

func (b *User) TableName() string {
	return "User"
}
