+++
title = "How to use?"
description = "Installation instructions and usage guide"
date = 2020-07-02T23:13:25+05:30
weight = 20
draft = false
bref = "Installation instructions and usage guide"
+++

## Install
___

**Node**
```
npm install roti-kapda-makaan
```
**Web**
```
<script src="https://cdn.jsdelivr.net/npm/roti-kapda-makaan@2.0.1/dist/roti-kapda-makaan.min.js"></script>
```

## Usage
___

**Node**
```
import { generate } from 'roti-kapda-makaan'

async function getHinglishId() {
    const id = await generate();
    return id;
}
```
**Web**
```
async function getHinglishId() {
    const id = await rotiKapdaMakaan.generate();
    return id;
}
```
