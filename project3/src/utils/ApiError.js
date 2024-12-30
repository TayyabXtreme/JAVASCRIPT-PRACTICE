class ApiError extends Error{
    constructor(statusCaode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message);
        this.statusCaode=statusCaode;
        this.data=null;
        this.error=error;
        this.message=message;
        this.success=false;
        this.errors=errors;


        if(stack){
            this.stack=stack;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }


        
    }
}

export {ApiError}