import React from 'react'
import Button from '../../components/Button'
import styles from './Cat.module.css'
import { useGetCatQuery } from './catSlice'

export default function Cat() {
    const { data = [], error, isLoading, isFetching, refetch } = useGetCatQuery()

    return (
        <section>
            <Button onClick={refetch} >Cat</Button>
            <div>
                <img
                    className={styles.cat}
                    src={
                        !error ?
                            isLoading || isFetching ?
                                'https://media1.tenor.com/images/8f7a28e62f8242b264c8a39ba8bea261/tenor.gif?itemid=15922897'
                                :
                                data[0].url
                            :
                            'https://i.ytimg.com/vi/KuLFXr7OPpc/hqdefault.jpg'
                    }
                    alt=""
                />
            </div>
        </section>
    )
}