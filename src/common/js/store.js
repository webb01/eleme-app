export function saveTolocal(id, key, value) {
    let seller = localStorage.__seller__;
    if (!seller) {
        seller = {};
        seller[id] = {};
    } else {
        seller = JSON.parse(seller);
        if (!seller[id]) {
            seller[id] = {};
        }
    }
    seller[id][key] = value;
    localStorage.__seller__ = JSON.stringify(seller);
};

export function loadFormLocal(id, key, def) {}