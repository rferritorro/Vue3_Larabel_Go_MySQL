package Models

import (
	"time"
)

type Reserved struct {
	Id       uint   `json:"id"`
	User_id  User   `gorm:"column:id;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Table_id Table_ `gorm:"column:id;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	//Menu_id       Menu `json:"id"`
	Date time.Time `json:"date"`
}

func (b *Reserved) TableName() string {
	return "User_table_reserved"
}
