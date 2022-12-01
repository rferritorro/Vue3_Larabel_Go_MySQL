package Models

type Menu struct {
	Id     uint   `json:"id"`
	Nombre string `json:"nombre"`
}

func (b *Menu) TableName() string {
	return "Menu"
}
