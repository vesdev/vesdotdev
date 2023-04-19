<header>
    <h1 class="title">ves</h1>
    <div class="tabs">
        <div class="tab focused">
            <h1>projects</h1>
            <div class="underline" />
        </div>
        <div class="tab">
            <h1>about</h1>
            <div class="underline" />
        </div>
    </div>
</header>

<style>
    header {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        width: 100%;
        background-color: #232530;
        user-select: none;
    }

    h1 {
        color: #e95678;
        text-align: center;
        font-family: "Barlow-Light";
        font-size: 1.5rem;
        margin: 0;
    }

    .title {
        position: absolute;
        margin-left: 10px;
        margin-top: 5px;
        color: #f09483e6;
        text-align: left;
        font-family: "Barlow";
        font-size: 1.25rem;
    }

    .tabs {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .tab {
        width: 100%;
        max-width: 110px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .underline {
        opacity: 0%;
    }
    .focused .underline {
        opacity: 100%;
    }

    .underline {
        height: 5px;
        width: 100%;
        background-color: #e95678;
    }
</style>
