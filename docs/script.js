const seasons = {
    'spring': {
        'text': 'ハルはあけぼの！ようようシロくなりゆくヤマギワ＞すこしアカリて＞ムラサキだちたるクモのほそくたなびきタル！！！！@@@@@@####＃＃＃',
        'fontSize': 5.5,
        'nOfCaps': 8,
        'bg_path': './img/IMG_4537.JPG',
        'bg_position': 'center'
    },
    'summer': {
        'text': 'ナツはヨル！ツキのころはさらなり！やみもなほ★ホタルのオオくトビちがひタル！また＞ただヒトつフタつなど＞ほのかにうちヒカりてユくもヲカシ＞アメなどフるもヲカシ！！',
        'fontSize': 5,
        'nOfCaps': 9,
        'bg_path': './img/IMG_3653.png',
        'bg_position': 'center'
    },
    'autumn': {
        'text': 'アキはユーグレ！ユウヒのさしてヤマのハいとチコウなりたるにトリのねどころへユクとて＞ミつヨつ＞フタつミつなど＞とびいそぐさへアワレなり！まいてカリなどのつらねたるがいとチイサくくミゆるはいとヲカシ！ヒいりはててカゼのオトムシのネなど＞はたいふべきにあらズ！！！！！％％＠＠＄＄;;::＾＾％％',
        'fontSize': 3.7,
        'nOfCaps': 12,
        'bg_path': './img/IMG_3880.png',
        'bg_position': 'center'
    },
    'winter': {
        'text': 'フユはつとめて！ユキのフりたるはユウべきにもあらず！シモのいとシロきも＞またさらでもいとサムきにヒなどイソぎおこして＞スミもてワタるもいとつきづきし！ヒルになりてぬるくゆるびもていけば＞ヒオケのヒもシロきハイがちになりてワロシWWWW%%--☆★☆★',
        'fontSize': 4,
        'nOfCaps': 11,
        'bg_path': './img/IMG_4342.jpg',
        'bg_position': 'left'
    }
}

Object.keys(seasons).forEach(s => {
    seasons[s]['gridWidth'] = seasons[s]['fontSize'] * seasons[s]['nOfCaps'] + 0.2;
})

const changeTheSeason = season => {
    document.querySelector('.makura').innerHTML = seasons[season]['text'];
    document.querySelector('.makura').style.fontSize = seasons[season]['fontSize'] + 'rem';
    document.querySelector('.stage').style.width = seasons[season]['gridWidth'] + 'rem';
    document.querySelector('.stage').style.height = seasons[season]['gridWidth'] + 'rem';
    document.querySelector('.stage').style.backgroundImage = 'url(' + seasons[season]['bg_path'] + ')';
    document.querySelector('.stage').style.backgroundPosition = seasons[season]['bg_position'];
}
changeTheSeason('spring');

const inputs = document.querySelectorAll('input');
for (let e of inputs) {
    e.addEventListener('change', function() {
        if (this.checked) {
            changeTheSeason(this.value);
        }
    });
}