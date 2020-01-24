package models.items;

import java.util.Date;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class Item_MasterModel extends Item_CommonModel {

	public Integer sort;
	public Date begin_time;
	public Date end_time;
	public String status;
}
