
$.get({url: './user.json'}).then(function(data){
    $.get({url: './group.json?id=' + data.id}).then(function(data){
        $.get({url: './group_member.json?id=' + data[0].id}).then(function(){
            console.log('member请求成功')
        },onError)
    },onError)
},onError);

function onError(){
    console.log('你失败了')
}