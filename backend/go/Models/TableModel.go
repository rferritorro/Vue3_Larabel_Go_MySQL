package Models

type Table_ struct {
	Id       uint `gorm:"primary_key"`
	Reserved bool `json:"reserved"`
	Place	 string `json:"place"`
	Img		 string `json:"img"`
}
func (b *Table_) TableName() string {
	return "Table_"
}
