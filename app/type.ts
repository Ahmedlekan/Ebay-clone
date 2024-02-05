export type Addressesprops =  {
    addressId: string
    user_id?: string
    name: string
    address: string
    zipcode: string
    city: string
    country: string
    created_at?: string
  }
  
export type OrdersProps = {
    id: number
    user_id: string
    stripe_id: string
    name: string
    address: string
    zipcode: string
    city: string
    country: string
    total: number
    created_at: string
    orderItem:  OrderItemProps[]
  }
  
export type OrderItemProps =  {
    id: number
    order_id: number
    product_id: number
    created_at: string
    order: OrdersProps[]
    product: ProductProps[]
  }

 export type ProductProps = {
    id: number
    category: string
    title: string
    description: string
    url: string
    price: number
    created_at?: string
    orderItem: OrderItemProps[];
  }