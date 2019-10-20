room = game.createRoom("room", "배경-1.png") // 방 생성

room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("STILL LOCKED") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
	printMessage("크리스마스와 광복절의 날짜를 합한 것에서 개천절을 빼면?")
	showKeypad("number", "1037" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.book.onClick = function() {
	showImageViewer("종이.png", "책.txt"); // 이미지 출력
}

room.tree=room.createObject("tree", "크리스마스트리.jpg")
room.tree.setWidth(210)
room.locateObject(room.tree, 280, 360)

room.flag=room.createObject("flag", "태극기.jpg")
room.flag.setWidth(300)
room.locateObject(room.flag, 700, 360)

room2 = game.createRoom("room2", "배경-6.png") // 방 생성

room2.door = room2.createObject("door", "문2-우-닫힘.png") // 문 생성
room2.door.setWidth(136) // 크기 조절
room2.locateObject(room2.door, 1049, 300) // 문 배치
room2.door.lock() // door 상태를 locked로 변경


room2.door.onClick = function(){
	game.move(room) // room으로 이동
}
room2.door.onClick = function() { // door를 클릭했을 때
	if(room2.door.isClosed()){ // door가 closed 상태이면
		room2.door.open() // door의 상태를 open으로 바꿈
	} else if (room2.door.isOpened()){ // door가 opened 상태이면
		game.move(room3) // room3로 이동
	} else if (room2.door.isLocked()){ // door가 locked 상태이면
		printMessage("STILL LOCKED") // 메시지 출력
	}
}

room2.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room2.door.setSprite("문2-우-열림.png") // 열린 문으로 변경
}

room2.keypad = room2.createObject("keypad", "키패드-우.png") // 오브젝트 생성
room2.keypad.setWidth(50) // 크기 조절
room2.locateObject(room2.keypad, 930, 250) // 위치 변경

room2.keypad.onClick = function() {
	printMessage("칠판을 확인해봐")
	showKeypad("alphabet", "APPLE" , function(){ // 키패드 1 - 숫자4자리
		room2.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room2.sopa=room2.createObject("sopa", "소파2-1.png")
room2.sopa.setWidth(450)
room2.locateObject(room2.sopa, 250, 410)

room2.earth=room2.createObject("earth", "지구본-1.png")
room2.earth.setWidth(200)
room2.locateObject(room2.earth, 700, 340)

room2.board=room2.createObject("board", "초록색칠판-왼쪽.png")
room2.board.setWidth(150)
room2.locateObject(room2.board, 490, 155)
room2.board.onClick = function() {
	showImageViewer("종이.png", "칠판.txt"); // 이미지 출력
}


room3 = game.createRoom("room3", "배경-7.jpg") // 방 생성
room3.door = room3.createObject("door", "문-우-닫힘.png") // 문 생성
room3.door.setWidth(136) // 크기 조절
room3.locateObject(room3.door, 930, 505) // 문 배치
room3.door.lock() // door 상태를 locked로 변경

room3.stand=room3.createObject("stand","스탠드.png")
room3.stand.setWidth(120)
room3.locateObject(room3.stand, 430, 420)


room3.door.onClick = function() { // door를 클릭했을 때
	if(room3.door.isClosed()){ // door가 closed 상태이면
		room3.door.open() // door의 상태를 open으로 바꿈
	} else if (room3.door.isOpened()){ // door가 opened 상태이면
		game.clear() // 게임 클리어
	} else if (room3.door.isLocked()){ // door가 locked 상태이면
		printMessage("STILL LOCKED") // 메시지 출력
	}
}

room3.keypad = room3.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room3.keypad.setWidth(80) // 크기 조절
room3.locateObject(room3.keypad, 815, 450) // 위치 변경

room3.note = room3.createObject("note", "노트.png")
room3.note.setWidth(150)
room3.locateObject(room3.note, 300, 650)
room3.note.onClick = function() {
	showImageViewer("종이.png", "노트.txt"); // 이미지 출력
}

room3.keypad.onClick = function() {
	printMessage("노트를 읽어봐")
	showKeypad("number", "3569" , function(){ // 키패드 1 - 숫자4자리
		room3.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

game.start(room)
printMessage("GOOD LUCK ON YOUR ESCAPE")

