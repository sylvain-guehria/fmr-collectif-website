const { saveItem } = require('./saveItem');

let itemServiceDi = null;
let storageFunctions = null;
const saveItemUseCase = (item, currentFile) => saveItem(itemServiceDi, storageFunctions)(item, currentFile);

beforeEach(function () {
    itemServiceDi = {
        editItem: jest.fn()
    },
        storageFunctions = {
            handleUpload: jest.fn()
        };
});

const item = {
    uid: 'uid',
    label: 'label',
    size: 'M',
    photoLink: 'originalPhotoLink',
    color: 'blue',
    quantity: 5,
    price: 20,
    numberTotalSell: 6
};

it('Does not update the item photoLink if there is no new file to upload', async function () {
    storageFunctions.handleUpload.mockResolvedValue('www.firestorageUrl.com');
    const currentFile = null;

    expect(await saveItemUseCase(item, currentFile)).toBe('originalPhotoLink');
});

it('Update the item photoLink with the firebase storage link if there is a new file to upload', async function () {
    storageFunctions.handleUpload.mockResolvedValue('www.firestorageUrl.com');
    const currentFile = {name: 'fakefile'};

    expect(await saveItemUseCase(item, currentFile)).toBe('www.firestorageUrl.com');
});
