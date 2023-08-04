// CustomButton Props Types
export interface CustomButtonProps {
    title : string,
    handleClick?: React.MouseEventHandler < HTMLButtonElement >,
    customStyles?: string,
    btnType?: "button" | "submit",
    textStyles?: string,
}

// Manufecturar ComboBox Props Types
export interface ManufecturerComboBoxTypes {
    manufecturer : string,
    setmanufecturer : (manufecturer : string) => void
}

// calculate car rent
export interface calculateCarRentProps {
    mpg : number;
    year : number
}


// Single Car Data Props types
export interface singleCarProps {
    city_mpg : number;
    class : string;
    combination_mpg : number;
    cylinders : number;
    displacement : number;
    drive :string;
    fuel_type : string;
    highway_mpg : number;
    make : string;
    model : string;
    transmission : string;
    year : number;
}


// Single Car Data Props types
export interface searchParamsProps {
    fuel?: string;
    year?: number;
    make?: string;
    model?: string;
    limit?: number;
    page?: number;
    transmission?: string;
}

export interface homePgaeSearchProps {
    searchParams : searchParamsProps
}

// Car details model props types
export interface carDetailsProps {
    isOpen : boolean,
    setIsOpen : (isOpen : boolean) => void
}


// Car details model props types
export interface filterProps {
    title : string,
    options : {
        title : string | number,
        value : string | number,
    }[]
}