Future = Npm && Npm.require('fibers/future');

Meteor.methods({

    storeOnUplodcare: function(uuid)
    {
        check(uuid, String);

        this.unblock();

        var future = new Future();

        HTTP.call(
            'PUT',
            'https://api.uploadcare.com/files/' + uuid + '/storage/',
            {
                headers: {
                    Accept: 'application/vnd.uploadcare-v0.3+json',
                    Date: new Date().toJSON(),
                    Authorization: 'Uploadcare.Simple ' + Meteor.settings.uploadcare.public_key + ':' + Meteor.settings.uploadcare.secret_key
                }
            },
            function(err)
            {
                if (err)
                {
                    future.return(err, null)
                }
                else
                {

                    future.return(null, true)
                }
            }
        );

        return future.wait();
    },

    deleteFromUploadcare: function(uuid)
    {
        check(uuid, String);

        this.unblock();

        var future = new Future();

        HTTP.call(
            'DELETE',
            'https://api.uploadcare.com/files/' + uuid + '/',
            {
                headers: {
                    Accept: 'application/vnd.uploadcare-v0.3+json',
                    Date: new Date().toJSON(),
                    Authorization: 'Uploadcare.Simple ' + Meteor.settings.uploadcare.public_key + ':' + Meteor.settings.uploadcare.secret_key
                }
            },
            function(err)
            {
                if (err)
                {
                    future.return(err, null)
                }
                else
                {
                    future.return(null, true)
                }
            }
        );

        return future.wait();
    }

});