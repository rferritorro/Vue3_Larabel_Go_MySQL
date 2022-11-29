package Models

type User struct {
	id      	uint   `json:"id"`
	username   	string `json:"username"`
	password   	string `json:"password"`
	email   	string `json:"email"`
	avatar 		string `json:"avatar"`
	type_ 		bool   `json:"type_"`

}

func (b *User) TableName() string {
	return "user"
}
