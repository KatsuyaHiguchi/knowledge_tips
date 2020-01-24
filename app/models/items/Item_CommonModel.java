package models.items;

import java.util.Date;

import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

import com.avaje.ebean.Model;
import com.avaje.ebean.annotation.CreatedTimestamp;
import com.avaje.ebean.annotation.UpdatedTimestamp;

@MappedSuperclass
public class Item_CommonModel extends Model {

	@CreatedTimestamp
	public Date create_time;

	@UpdatedTimestamp
	public Date update_time;

	@Version
	public Integer update_count;

	public String editor;
}
