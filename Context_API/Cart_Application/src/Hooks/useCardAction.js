export const useCardAction = () => {
   
        const onAddToCart = (e) => {
            try{
                console.log(JSON.stringify(e.target.values));
            }catch(e){
                console.log(e);
                throw  new Error (e);
            }
        }

        return {
            onAddToCart
        }
    
}