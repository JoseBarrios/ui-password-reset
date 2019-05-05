function request(e, method, data, url){
    return new Promise((resolve, reject) => {
        $.ajax({
            headers: { "x-csrf-token" : CSRF_TOKEN },
            success: resolve,
            method: method,
            error: reject,
            data: data,
            url: url,
        });
    })
}
