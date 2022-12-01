package Services

import (
	"go-restaurant/Config"
	"go-restaurant/Models"
)

func GetAllTables(tables_ *[]Models.Table_) (err error) {
	if err = Config.DB.Find(tables_).Error; err != nil {
		return err
	}
	return nil
}

func GetTableByID(table_ *Models.Table_, id string) (err error) {
	if err = Config.DB.Where("id = ?", id).First(table_).Error; err != nil {
		return err
	}
	return nil
}
