import { Account, Client } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    Platform: 'com.Aura.anish',
    projectId: '66ef0ee9000ca03c5918',
    databaseId: '66ef10c5001011a444ba',
    userCollectionId: '66ef10ec000e259e5bbd',
    videoCollectionId: '66ef111600070d9e03ec',
    storageId: '66ef12a70010cb200252'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.Platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);


const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}


