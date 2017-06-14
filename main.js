

// $.get('./data.json',function (data, statusText, xhr) {
//     console.log(data)
//     console.log(statusText)
//     console.log(xhr)
// })

$.ajax({
    url: './user.json',
    method: 'get',
    success: function(data, statusText, xhr){
        $('#user').text(data.name)

        $.ajax({
            url: './group.json?id=' + data.id,
            method: 'get',
            success: function (data) {
                // console.log(data)
                let s = data.map(function (x) {
                    return x.name
                });
                $('#groups').text(s.join(','))

                $.ajax({
                    url: './group_member.json',
                    method: 'get',
                    success: function(data){
                        let a = data.map(function(x){
                            return x.name
                        })
                        $('#members').text(a.join(','))
                    },
                    error: function(){
                        alert('重来试试')
                    }
                })
            },



            error: function () {
                alert('稍等')
            }
        })
    },
    error: function(xhr, statusText, reason){
        alert('服务器繁忙，先休息一下')
    }
});