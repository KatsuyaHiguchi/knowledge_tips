package models.items;

import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;

@MappedSuperclass
public class Item_PagingModel extends Item_CommonModel {

	// ページング
	@Transient
	public Integer max_count;

	@Transient
	public Integer all_count;
}
