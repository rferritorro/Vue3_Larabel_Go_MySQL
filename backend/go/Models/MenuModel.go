package Models

type Menu struct {
	Id     uint   `json:"id"`
	Nombre string `json:"nombre"`
	Descr  string `json:"descr"`
	Img    string `json:"img"`
}

func (b *Menu) TableName() string {
	return "Menu"
}
