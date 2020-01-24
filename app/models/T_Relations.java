package models;

import javax.persistence.Entity;
import javax.persistence.Id;

import models.items.Item_CommonModel;

/**
 * 知識間の関連性<br>
 * 断片的知識同士の接続情報
 *
 * @author katsu
 *
 */
@Entity
public class T_Relations extends Item_CommonModel {

	@Id
	public Long id;
	public Long token_id;
	public Long one_tip_id;
	public Long other_tip_id;

	public static final Find<Long, T_Relations> _find = new Find<Long, T_Relations>(){};
}
