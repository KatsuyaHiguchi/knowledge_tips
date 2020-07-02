$(function() {

	var move_box = null;
	var move_line_list = null;
	var from_x = null;
	var from_y = null;

	$('g').on(
			'click',
			function() {

				// todo:idを元にタイトルと詳細を取得する

				// 仮に画面から取得する
				const title = $(this).find('[name = "title"]').text();
				window.parent.set_title(title);

				const note = $(this).find('[name = "note"]').html();
				window.parent.set_note(note);
			});

	$('g').on(
			'mousedown',
			function(event, ui) {

				const id = $(this).attr('id')

				move_box = $(this);

				move_line_list = new Array();
				$(`line[one="${id}"]`).each(function() {
					move_line_list.push($(this));
				});

				$(`line[other="${id}"]`).each(function() {
					move_line_list.push($(this));
				});

				from_x = event.pageX;
				from_y = event.pageY;
			});

	$('svg').on(
			'mouseup',
			function(event, ui) {

				if(move_box == null) return;

				move_box = null;
				move_line_list = null;
				from_x = null;
				from_y = null;
			});

	$('svg').on(
			'mousemove',
			function(event, ui) {

				if(move_box == null) return;

				const move_x = event.pageX - from_x;
				const move_y = event.pageY - from_y;

				// tipの移動
				move_box.find('rect').each(function() {

					const move_rect = $(this);
					var rect_x = parseInt(move_rect.attr('x'), 10);
					var rect_y = parseInt(move_rect.attr('y'), 10);

					move_rect.attr('x', rect_x + move_x);
					move_rect.attr('y', rect_y + move_y);
				});

				move_box.find('text').each(function() {

					const move_text = $(this);
					var text_x = parseInt(move_text.attr('x'), 10);
					var text_y = parseInt(move_text.attr('y'), 10);

					move_text.attr('x', text_x + move_x);
					move_text.attr('y', text_y + move_y);
				});

				// line の移動
				const id = move_box.attr('id');
				$(`line[one="${id}"]`).each(function() {

					const move_line = $(this);

					var line_x = parseInt(move_line.attr('x1'), 10);
					var line_y = parseInt(move_line.attr('y1'), 10);

					move_line.attr('x1', line_x + move_x);
					move_line.attr('y1', line_y + move_y);
				});

				$(`line[other="${id}"]`).each(function() {

					const move_line = $(this);

					var line_x = parseInt(move_line.attr('x2'), 10);
					var line_y = parseInt(move_line.attr('y2'), 10);

					move_line.attr('x2', line_x + move_x);
					move_line.attr('y2', line_y + move_y);
				});

				from_x = event.pageX;
				from_y = event.pageY;
			});
});