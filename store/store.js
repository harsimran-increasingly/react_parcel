import create from 'zustand';
import TEMPBUNDLES from '../lib/bundle.json'
const useStore = create((set, get) => ({
    bundles: {},
    mainProduct: [],
    cart: [],
    total: 0,
    addedProductIds : [],
    fetchBundle: async (url) => {
        if (url == "TEST") {
            set({
                bundles: TEMPBUNDLES
            })
            get().addToStore(TEMPBUNDLES.ProductsDetail[0])
            return
        }
        const response = await fetch(pond)
        set({
            bundles: await response.json()
        })
        return {
            ...state,
            cart: [...state.cart,TEMPBUNDLES.ProductsDetail[0]]
        };
    },
    addToStore: (product) => {

        set(state => {
            const isPresent = state.cart.find(item => item.ProductId === product.ProductId);
           
            if (!isPresent) {
                return {
                    ...state,
                    cart: [...state.cart, product]
                };
            }

            return {
                ...state,
                cart: state.cart
            };

        })
        get().calculateTotal()
        get().addProductId(product.ProductId)
    },
    removeFromStore: (id) => {
        set((state) => ({
            cart: state.cart.filter((item) => item.ProductId !== id),
        }));
        get().calculateTotal()
        get().removeProductId(id)
    },
    calculateTotal: () => {
        set((state) => {
            let currentTotal = 0
            if (state.cart.length !== 0) {

                currentTotal = state.cart.map(item => item.Price).reduce((prev, next) => Number(prev) + Number(next));
            }

            return {
                total: currentTotal
            };
        })
    },
    addProductId: (id) => {
        set(state => {
            const isPresent = state.addedProductIds.find(item => item === id);

            if (!isPresent) {
                return {
                    ...state,
                    addedProductIds: [...state.addedProductIds, id]
                };
            }

            return {
                ...state,
                addedProductIds: state.addedProductIds
            };

        })
    },
    removeProductId: (id) => {
        set(state => {
            const updatedIds = state.addedProductIds.filter(item => item !== id);
            return {
                ...state,
                addedProductIds: updatedIds
            };

        })
    },

}))

export default useStore