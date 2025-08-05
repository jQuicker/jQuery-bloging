// DOM 준비되면 실행
$(document).ready(function () {
  // 버튼 클릭 이벤트 핸들러
  $("#loadBtn").click(function () {
    console.log(
      "Button Clicked! +" +
        new Date().toDateString() +
        " " +
        new Date().toLocaleDateString() +
        " "
    );

    // Ajax 요청
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/1",
      type: "GET", // HTTP 메소드
      dataType: "json", // 응답 데이터 타입
      success: function (data) {
        // 요청 성공 시 실행되는 콜백 함수
        console.log("Data Loaded: ", data);
        // 결과를 HTML에 표시
        $("#result").html(`<h3>${data.title}</h3><p>${data.body}</p>`);
      },
      error: function (xhr, status, error) {
        console.error("Error: ", error);
        // 오류 발생 시 HTML 오류 메시지 표시
        $("#result").html("<p>ERROR: Data could not be Loaded</p>");
      },
    });
  });
});
