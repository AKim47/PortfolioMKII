import React, { useEffect } from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers'

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name)
    })
}

