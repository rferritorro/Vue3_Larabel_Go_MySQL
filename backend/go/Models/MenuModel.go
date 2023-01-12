package Models

type Menu struct {
	Id     uint   `gorm:"primary_key"`
	Nombre string `json:"nombre"`
	Descr  string `json:"descr"`
	Img    string `json:"img"`
}

func (b *Menu) TableName() string {
	return "Menu"
}
