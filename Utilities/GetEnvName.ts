export class GetEnvName{

    public getEnvironment(): string {
        
        const envi = process.env.ENVIRON || 'test';        //Get the value of evnironment variable i.e ENV, 
        
        if (envi.includes( 'prod') || envi.includes('dev') || envi.includes('test') )  {                     //Check the value
            return `.env.${process.env.ENVIRON}` ; //return desired url
        }
        else
            return '.env.test';
    }
}