// DOMの読み込みが終わったらfunction()の中の処理を実行します。
$(document).ready(function(){

  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]の入力値を取得して合計点と平均点を出すロジックを作ります。
  function score_indicate(){
    // In the variable "subject_points"
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]の配列を代入します。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // In the variable "sum"
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]をそれぞれ足します。
    // Hint! Take out the arrays one by one and add them.
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // 「SUM：」(id="sum_indicate")に変数「sum」(合計点)を出力させます。
    $("#sum_indicate").text(sum);
    let average = sum / subject_points.length;
    $('#average_indicate').text(average);


    // In the variable "average"
    // 平均値を出して代入します。(平均をとりたい数の合計点数(sum) / 全体の個数)
    // ヒント! 全体の個数はlengthメソッドを使って求めます。(lengthメソッド: 文字列の長さや配列の要素数などを取得するメソッド)
  };
  // 平均点数を取得し、取得した平均点数からGrade分け("A", "B", "C", "D")をするロジックを作ります。
  function get_achievement(){
    // In the variable "averageIndicate"
    // Get the average score from id = "average_indicate" on HTML and substitute it.
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    // If "averageIndicate" is 80 or higher, "A" is returned.
    if ( averageIndicate >= 80){
      return "A";
      // もし「averageIndicate」が60以上なら"B"を返します。
    } else if ( averageIndicate >= 60) {
      return "B";
      // もし「averageIndicate」が40以上なら"C"を返します。
    } else if ( averageIndicate >= 40) {
      return "C";
      // もし「averageIndicate」がそれ以外の点数なら"D"を返します。
    } else {
      return "D";
    }
  };
  // Get the score of each subject and make the logic to judge pass / fail from the obtained score.
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // Substitute the number of subjects entered in the variable "number".
    let number = subject_points.length;
    // Assign "pass" to the variable "judge".
    let judge = "Pass";
    for (let i = 0; i < number; i++){
    	if(subject_points[i] < 60){
    		judge = "Fail"
    		break;
    	}
    }
    // If the score of each subject entered is lower than 60 points, "Judge" is reassigned to the variable "judge" and "judge" is returned.
    // Hint! Try searching for "javascript score pass / fail logic".
    return judge;
  };
  // Create the final judge logic.
  function judgement(){
    // 変数「achievement」に「get_achievement()の戻り値」を代入します。
    let achievement = get_achievement();
    // 変数「pass_or_failure」に「get_pass_or_failure()の戻り値」を代入します。
    let pass_or_failure = get_pass_or_failure();
    // 「Result」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}so${pass_or_failure}soす」が出力される処理soす。
    $('#alert-indicate').remove();

    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement}. It is ${pass_or_failure}.</label>`);
  };
  // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理soす。
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // 「Grade」(id="evaluation")ボタンを押したら「get_achievement()」が出力される処理soす。
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  // 「Pass/Fail」(id="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理soす。
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  // 「Result」(id="btn-declaration")ボタンを押したら「function judgement()」が出力される処理soす。
  $('#btn-declaration').click(function() {
  	 $(`declaration`).text(judgement());
  });
});