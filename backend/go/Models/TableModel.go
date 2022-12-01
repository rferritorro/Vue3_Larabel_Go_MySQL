package Models

type Table_ struct {
	Id       uint `json:"id"`
	Reserved bool `json:"reserved"`
}

func (b *Table_) TableName() string {
	return "Table_"
}
