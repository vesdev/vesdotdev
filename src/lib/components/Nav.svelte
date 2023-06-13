<header>
    <div class="tabs">
        <div class="tab focused">
            <h1>projects</h1>
            <div class="underline" />
        </div>
    </div>
</header>

<style>
    header {
        width: 100%;
        background-color: #1c1e26;
        user-select: none;
    }

    h1 {
        color: #e95678;
        text-align: center;
        font-family: "Barlow-Light";
        font-size: 1.75rem;
        margin: 0;
    }

    .tabs {
        display: flex;
        flex-direction: row;
        justify-content: center;
        overflow: hidden;
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
