const start = document.querySelector('.btn-quiz')

const rule = document.querySelector('.box_rule');
const btnExit = rule.querySelector('.tombol .exit');
const btnLanjut = rule.querySelector('.tombol .continue');

const container = document.querySelector('.container');
const navbar = document.querySelector('.box-navbar');

const username = document.getElementById('username');
const nama = navbar.querySelector('.nama');
const boxQuestion = document.querySelector('.box-question');

const skor = document.querySelector('.box-skor');
// const ulangi = document.querySelector('.btn-skor .ulangi');
const keluar = document.querySelector('.btn-skor .keluar');

const disable = document.querySelector('.option ul');
console.log(disable);

const btnNext = document.querySelector('footer .next');

// ceklist.addEventListener('click',function(){
// 		for ( let i = 0; i < ceklist.length ; i++){
// 		ceklist[i].classList.add('active')
// 	}
// 	})
	// ceklist.forEach(function(elemenBaru){
	// elemenBaru.addEventListener('click', function(event){
	// 	elemenBaru.style.backgroundColor= 'red'
	// 	loadQuiz
	// })


	// })




const Data=[
	{
		question : "1. Selector CSS untuk memberi warna pada teks ?",
		a: "margin",
		b: "padding",
		c: "color",
		d: "background color",
		correct: "c",

	},
	{
		question : "2. Selector CSS untuk mengatur ukuran font ?",
		a: "font-family",
		b: "font-size",
		c: "color",
		d: "background color",
		correct: "b",
	},
	{
		question : "3. Tag html untuk paragraf ?",
		a: "hr",
		b: "span",
		c: "p",
		d: "link",
		correct: "c",
	},
	{
		question : "4. tag html untuk gambar ?",
		a: "img",
		b: "form",
		c: "table",
		d: "header",
		correct: "a",
	},
		{
		question : "5.Berikut ini digunakan untuk memberhentikan setInterval pada timing-events ?",
		a: "get.Attribute()",
		b: "clearInterval()",
		c: "setTimeut()",
		d: "clearTimeout()",
		correct: "b",
	},

	{
		question : "6. Method array pada JavaScript yang berfungsi untuk menambah elemen diakhit array ?",
		a: "pop()",
		b: "slice()",
		c: "Map()",
		d: "push()",
		correct: "d",
	},

	{
		question : "7. Yang termasuk dalam pop-up box pada JavaScript ?",
		a: "confirm",
		b: "while",
		c: "if",
		d: "switch",
		correct: "a",
	},
	{
		question : "8. Dibawah ini yang termasuk satuan  relative unit adalah? ",
		a: "px,em,rem",
		b: "em,%,px",
		c: "vmin,ch,rem",
		d: " px,vh,vw",
		correct: "d",
	},
	{
		question : "9.Yang termasuk value pada property animation ? ",
		a: "duration",
		b: "scale",
		c: "Rotate",
		d: "rgba()",
		correct: "a",
	},
	{
		question : "10. Yang termasuk dalam value float dalam CSS layouting ?",
		a: "left",
		b: "top",
		c: "bottom",
		d: "rotate",
		correct: "a",

	},
	{
		question : "11. Berikut ini format font yang khusus dibuat untuk website oleh Mozilla ? ",
		a: "OTF",
		b: "TTF",
		c: "WOFF",
		d: "-moz-",
		correct: "c",
	},
	{
		question : "12. Value background-image yang berfungsi untuk membuat gradasi melingkar ? ",
		a: "radial-gradient()",
		b: "background -repeat",
		c: "linear-gradient()",
		d: "background-position",
		correct: "a",
	},
	{
		question : "13 .Yang bukan termasuk dalam value CSS position ? ",
		a: "static",
		b: "relative",
		c: "Flex",
		d: "absolut",
		correct: "c",
	},
	{
		question : "14.sebuah standar yang mendefinisikan bagaimana web server perangkat lunak dapat mendelegasikan generasi dari halaman web ke berbasis teks aplikasi adalah ? ",
		a: "Perl dan CGI",
		b: "CGI",
		c: "semua jawaban salah",
		d: "Perl",
		correct: "b",
	},
	{
		question : "15. Yang termasuk dalam objeck event ?",
		a: "margin",
		b: "preventDefault()",
		c: "classList.add",
		d: "classList.toggle",
		correct: "b",

	},
	{
		question : "16. Manakah yang merupakan servert spesicic variable pada CGI dibwah ini yang benar ? ",
		a: "SERVER_PROTOCOL",
		b: "GATEWAY_INTERFACE",
		c: "REQUEST_METHOD",
		d: "PATH_INFO",
		correct: "b",
	},
	{
		question : "17. Untuk menuliskan komentar dalam satu baris didalam javascript kita menggunakan ?",
		a: "//komentar //",
		b: "//komentar */",
		c: "/* komentar",
		d: "\\ komentar \\",
		correct: "a",
	},
	{
		question : "18. Tag HTML yang digunakan untuk memisahkan teks menjadi baris baru adalah ?",
		a: "<hr>",
		b: "<break>",
		c: "<teks>",
		d: "<br>",
		correct: "d",
	},
	{
		question : "19. Properti yang digunakan untuk mengatur ketebalan huruf ?",
		a: "font-weight",
		b: "font-family",
		c: "font-size",
		d: "text-transform",
		correct: "a",
	},
	{
		question : "20. Properti yang digunakan untuk mengatur transparansi ?",
		a: "box-shadow",
		b: "filter",
		c: "opacity",
		d: "letter-spacing",
		correct: "c",
	},



];

// function untuk memulai quiz
// aksi jika start quiz diklik
start.addEventListener('click',function(event){
	rule.classList.add("tampilkan");
	container.classList.add('hilangkan')
	event.preventDefault();
});


// aksi jika tombol keluar quiz diklik maka akan kembali ke halaman utama
btnExit.addEventListener('click', function(event){
	container.classList.remove('hilangkan');
	rule.classList.remove('tampilkan')
	event.preventDefault();

});


// aksi jika tombol lanjut diklik maka akan memunculkan navbar dan soal dan anama yang tertera pada saatnama diinput dihalaman utama web

function namaUser(){
	if ( username.value == ''){
		nama.innerText = 'Nama : Belum Input' + username.value
	}else{
		nama.innerText = 'Nama : ' + username.value;
	}
	username.style.textTransform = 'capitalize'
}

btnLanjut.addEventListener('click', function(){
	rule.classList.remove('tampilkan')
	// tampilkan navbar dan nama user yang diinputkan
	navbar.classList.add('displayNavbar');
	// tampilkan nama
	namaUser()
	

	boxQuestion.classList.add('displayQuestion');
	
	displaySisaPertanyaan(sisaPertanyaan);
	startTimer(15);

});



let timeValue = 15;
let count ;

let score = 0;

// digunakan untuk menambah setiap soal 
let soalSaatini = 0;

// karenapertanyaan dimulai dari nomor 1
let sisaPertanyaan = 1;

// function tampilBtn(){
// 	if ( answer.checked){
// 	btnNext.classList.add('tampilkan');
// }
// }


// aksi jika tombol lanjut pada soal diklik

btnNext.addEventListener('click', function(){
	// dikurangi satu agar menyentuh nilai akhir,karena inex dimulai dari 0

	// if ( soalSaatini < dataBase.length -1){
	// 	soalSaatini++;
	// 	sisaPertanyaan++;
	// 	displaySoal(soalSaatini);
	// 	displayOpsi(soalSaatini);
	// 	displaySisaPertanyaan(sisaPertanyaan);
	// 	clearInterval(waktu)
	// 	displayWaktu(timeValue)

	// }else if ( soalSaatini == dataBase.length -1 ){
	// 	btnNext.innerText = 'Submit';
		

	// }

	const answer = getSelected();

	if (answer){
		if ( answer === Data[soalSaatini].correct){
			// stopTimer()
			score++;


		}

		soalSaatini++;
		sisaPertanyaan++;
		clearInterval(count)
		startTimer(timeValue);
		

		if (soalSaatini < Data.length){
			loadQuiz()
			displaySisaPertanyaan()
		}else{

			btnNext.innerContent = 'Submit';
			boxQuestion.classList.remove('displayQuestion');
			skor.classList.add('displaySkor');
			navbar.classList.remove('displayNavbar');
			showHasil()
		}
	}



	
	// alert('score :'+score)
});


const pilih = document.querySelectorAll('.option ul li');



const questionEl = document.querySelector('.option-list .question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');

const answerEls = document.querySelectorAll('.answer');
// answerEls.forEach(function(elemenBaru){
// 	elemenBaru.parentElement.style.backgroundColor = 'transparent'
// })
loadQuiz()

function clearPilih(){
	answerEls.forEach(function(elemenBaru){
	elemenBaru.parentElement.parentElement.style.backgroundColor = 'transparent';
	elemenBaru.parentElement.parentElement.style.color = 'black'; 
	})
}

function loadQuiz(){
	deselectAnswer()
		clearPilih()
	btnNext.style.opacity = '0';

	disable.style.pointerEvents = "auto";

	const currentQuiz = Data[soalSaatini];
	questionEl.innerText = currentQuiz.question;
	optionA.innerText = currentQuiz.a;
	optionB.innerText = currentQuiz.b;
	optionC.innerText = currentQuiz.c;
	optionD.innerText = currentQuiz.d;
}




function deselectAnswer() {
	let temp;
	answerEls.forEach((answerEl,i) =>{

	if (answerEl.checked = false){
			score = 0;

			temp = answerEl.id;
			answerEl.parentElement.parentElement.style.backgroundColor = 'transparent';


	console.log(temp)
}
	})	
}


let cek;
function getSelected(){

	answerEls.forEach(function(elemenBaru,i){
			if ( elemenBaru.checked){
					btnNext.style.opacity = '1'; 	
					// elemenBaru.parentElement.parentElement.style.backgroundColor = 'transparent'
				
					cek = elemenBaru.id;
					console.log(cek);
	
				
				loadQuiz()
			}



	})



	return cek;
}

// stopTimer()
// tampilan untuk sisa question
const sisaQuestion = document.querySelector('.sisa-question');
function displaySisaPertanyaan(index){
	let hitung = sisaPertanyaan + ' dari ' + Data.length + ' soal ';
	sisaQuestion.innerText = hitung;
}


const predikat = document.querySelector('.box-skor .predikat');
const keterangan = document.querySelector('.box-skor .keterangan');
const ucapan = document.querySelector('.box-skor .ucapan');
const hasilAkhir = document.querySelector('.box-skor .hasilAkhir');

function showHasil(){
	let nilaiPerSoal = 5;
	let kategori ='';
	if ( username.value == ''){
			ucapan.innerText = 'Selamat! \n' + username.value + 'Nama Kosong' + '\n Quiz berhasil diselesaikan.';
	}else {
			ucapan.innerText = 'Selamat! \n' + username.value + '\n Quiz berhasil diselesaikan. ';
	}
	
	let hasil = 'Anda mencoba 20 pertanyaan. \nDan hasilnya benar ' + score + ' dari ' + Data.length + ' Soal.';

	keterangan.innerText = hasil;
	if ( score < 75){
		kategori = ' Tidak Lulus';
	}else {
		kategori = ' Lulus'
	}
	predikat.innerText = 'Anda ' + kategori;

	hasilAkhir.innerText = 'Nilai : ' + nilaiPerSoal * score;; 

}




// waktu
const timeCount = document.querySelector('.waktu .waktu-detik');
function startTimer (time){
		
	count = setInterval(timer,1000);
	function timer(){
		timeCount.innerText = time;
		time--;

	if( time < 9){
		let tambahKosong = timeCount.innerText;
		timeCount.innerText ="0" + tambahKosong;
	}if ( soalSaatini == Data.length - 1){
		clearInterval()
	
	}if ( time < 0 ) {

		clearInterval(count)

		disable.style.pointerEvents = "none";
		btnNext.style.opacity = '1';
		time.innerText = "00";
	}
	
	
//  untuk menghentikan jika elemen input radio button sudah diklik
answerEls.forEach(function(elemenBaru,i){
	elemenBaru.addEventListener('click',function(event){
		clearPilih()

		if( elemenBaru.checked){
			event.stopPropagation()
			clearInterval(count);

			btnNext.style.opacity= '1';
			elemenBaru.parentElement.parentElement.style.backgroundColor = 'darkblue';
			elemenBaru.parentElement.parentElement.style.color = 'white'; 
		}

	})
})
}
}

keluar.addEventListener('click',function(){
	window.location.reload();
})


// ulangi.addEventListener('click',function(){


// 		let score = 0;

// // digunakan untuk menambah setiap soal 
// 		let soalSaatini = 0;

// // karenapertanyaan dimulai dari nomor 1
// 		let sisaPertanyaan = 1;
// 	boxQuestion.classList.add('displayQuestion');
// 	skor.classList.remove('displaySkor');
// 	navbar.classList.add('displayNavbar');
// 	// question.location.reload(loadQuiz
// })



// function displaySoal(index){
// 	// mengambil tag pembungkus 
// 	const question = document.querySelector('.option-list .question');
// 	// mengambil pertanyaan pada script db


// 	let pertanyaanDB = data[index].question ;
// 	// let numberDB = dataBase[index].nomor;
// 	// question.innerText = numberDB + '.' + pertanyaanDB;
// 	question.style.fontSize = '1.4rem';
// 	question.style.fontWeight = '500';
// };




// function displayOpsi(index) {
	
// 	jawabanUser(soalSaatini)
// 	cekSkor(soalSaatini);
		
// 	document.getElementById('choiceText0').innerText = dataBase[index].pilihan[0];
// 	document.getElementById('choiceText1').innerText = dataBase[index].pilihan[1];

// 	document.getElementById('choiceText2').innerText = dataBase[index].pilihan[2];
// 	document.getElementById('choiceText3').innerText = dataBase[index].pilihan[3];

// 	//  seleksi pilihan user mengambil class option dan mengembalikan apapun yang dklik pada pilihan 
	
// }


// const option = document.querySelector('.option');
// console.log(option)




// function cekSkor(){
// 	for(let i = 0; i < saveJawaban.length; i++){
// 		if (saveJawaban[i] == koreksi[i]){
// 			console.log('benar')
// 			score += 10;
// 		}else {
// 			console.log('salah')
// 		}
// 	}
// }







