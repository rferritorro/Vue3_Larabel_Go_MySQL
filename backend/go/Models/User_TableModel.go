package Models



type Reserved struct {
	Id       uint   `gorm:"primary_key"`
	User_id uint `gorm:"foreignkey:Users(Id),constraint:OnUpdate:CASCADE,OnDelete:SET NULL"`
	Table_id uint `gorm:"foreignkey:Tables(Id),constraint:OnUpdate:CASCADE,OnDelete:SET NULL"`
	Menu_id uint `gorm:"foreignkey:Menus(Id),constraint:OnUpdate:CASCADE,OnDelete:SET NULL"`
	Date string `json:"date"`
	Hour int `json:"hour"`
	N_comensales int `json:"n_comensales"`
	Reserved bool `json:"reserved"`
}

func (b *Reserved) TableName() string {
	return "User_table_reserved"
}
