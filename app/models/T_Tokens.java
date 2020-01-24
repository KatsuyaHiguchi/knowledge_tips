package models;

import javax.persistence.Entity;
import javax.persistence.Id;

import models.items.Item_CommonModel;

/**
 * ユーザートークン<br>
 * アクセス時に自動付与される
 *
 * @author katsu
 *
 */
@Entity
public class T_Tokens extends Item_CommonModel {

	@Id
	public Long id;
	public String token;

	public static final Find<Long, T_Tokens> _find = new Find<Long, T_Tokens>(){};
}
