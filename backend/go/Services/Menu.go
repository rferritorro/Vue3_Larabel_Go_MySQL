package Services

import (
	"go-restaurant/Config"
	"go-restaurant/Models"
)

func GetAllMenus(menus *[]Models.Menu) (err error) {
	if err = Config.DB.Find(menus).Error; err != nil {
		return err
	}
	return nil
}

func GetMenuByID(menu *Models.Menu, id string) (err error) {
	if err = Config.DB.Where("id = ?", id).First(menu).Error; err != nil {
		return err
	}
	return nil
}
