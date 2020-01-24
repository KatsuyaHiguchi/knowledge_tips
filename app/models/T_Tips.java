package models;

import javax.persistence.Entity;
import javax.persistence.Id;

import models.items.Item_CommonModel;

/**
 * 断片知識
 *
 * @author katsu
 *
 */
@Entity
public class T_Tips extends Item_CommonModel {

	@Id
	public Long id;
	public Long token_id;
	public String subject;
	public String note;
	public String tags;

	public static final Find<Long, T_Tips> _find = new Find<Long, T_Tips>(){};
}
